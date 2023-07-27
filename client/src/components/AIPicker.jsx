import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type='outline'
            title='Asking AI...'
            customStyles='tex-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title='AI Logo'
              handleClick={() => handleSubmit("logo")}
              customStyles='tex-xs'
            />

            <CustomButton
              type='filled'
              title='AI Full'
              handleClick={() => handleSubmit("full")}
              customStyles='tex-xs'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
