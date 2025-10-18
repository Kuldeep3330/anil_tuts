import React, { useState, useRef, useEffect } from "react";

/**
 * InlineEditable
 * - click the text to edit
 * - Enter saves, Escape cancels, blur saves
 * - minimal CSS, beginner-friendly
 *
 * Props:
 * - value (string) initial text
 * - onSave(newValue) optional callback when saved
 */
function InlineEditable({ value = "Click to edit", onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [committed, setCommitted] = useState(value);
  const inputRef = useRef(null);

  // When entering edit mode, focus the input and select text
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // Start editing (show input)
  const startEdit = () => {
    setDraft(committed); // load latest committed value
    setIsEditing(true);
  };

  // Save new value
  const save = () => {
    const trimmed = draft.trim();
    setCommitted(trimmed);
    setIsEditing(false);
    if (onSave) onSave(trimmed);
  };

  // Cancel edit (revert draft)
  const cancel = () => {
    setDraft(committed);
    setIsEditing(false);
  };

  // Key handlers: Enter to save, Escape to cancel
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      save();
    } else if (e.key === "Escape") {
      cancel();
    }
  };

  return (
    <div style={{ display: "inline-block", minWidth: 150 }}>
      {!isEditing ? (
        // Read mode: clickable text
        <span
          onClick={startEdit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") startEdit(); }}
          style={{
            padding: "6px 8px",
            borderRadius: 4,
            cursor: "pointer",
            display: "inline-block",
            border: "1px dashed transparent"
          }}
          title="Click to edit"
        >
          {committed || <em style={{ color: "#999" }}>Empty — click to edit</em>}
        </span>
      ) : (
        // Edit mode: input
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={save}             // save on outside click / blur
          onKeyDown={onKeyDown}
          style={{
            padding: "6px 8px",
            borderRadius: 4,
            border: "1px solid #ccc",
            outline: "none",
            minWidth: 150
          }}
        />
      )}
    </div>
  );
}

export default InlineEditable