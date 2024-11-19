import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const TextAreaWithFormatting = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={TextAreaWithFormatting.modules}
        formats={TextAreaWithFormatting.formats}
        placeholder="Write something here..."
      />
    </div>
  );
};

// Add toolbar options
TextAreaWithFormatting.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ align: [] }],
    ["link", "image"],
    ["clean"], // remove formatting button
  ],
};

TextAreaWithFormatting.formats = [
  "header",
  "font",
  "list",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "align",
  "link",
  "image",
];

export default TextAreaWithFormatting;
