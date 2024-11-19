import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from .models import Destination

def get_destination_data():
    # Retrieve all destinations from the database
    destinations = Destination.objects.all()
    data = {
        'name': [],
        'destination_type': [],
        'activities': [],
        'budget_range': [],
        'family_friendly': [],
        'eco_friendly': [],
    }
    for dest in destinations:
        data['name'].append(dest.name)
        data['destination_type'].append(dest.destination_type)
        data['activities'].append(dest.activities)
        data['budget_range'].append(dest.budget_range)
        data['family_friendly'].append(dest.family_friendly)
        data['eco_friendly'].append(dest.eco_friendly)
    
    return pd.DataFrame(data)

def recommend_destinations(user_preferences):
    # Get destination data
    destination_df = get_destination_data()

    # Create a TF-IDF Vectorizer to analyze the activities
    tfidf = TfidfVectorizer(stop_words='english')
    destination_df['activities'] = destination_df['activities'].fillna('')
    tfidf_matrix = tfidf.fit_transform(destination_df['activities'])

    # Calculate cosine similarity
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

    # Get the user's preferred activities and destination types
    preferred_activities = user_preferences.preferred_activities.split(',')
    preferred_dest_types = user_preferences.preferred_destination_types.split(',')

    # Create a mask for filtering recommendations
    mask = (destination_df['destination_type'].isin(preferred_dest_types)) | (destination_df['activities'].str.contains('|'.join(preferred_activities)))

    # Get the indices of the recommended destinations
    recommended_indices = [i for i in range(len(destination_df)) if mask[i]]

    # Sort by the rating
    recommended_destinations = destination_df.iloc[recommended_indices].sort_values(by='rating', ascending=False)

    return recommended_destinations[['name', 'country', 'activities', 'budget_range', 'rating']]
