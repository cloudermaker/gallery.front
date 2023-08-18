import { useState } from 'react';
import { CustomButton } from '../customButton';
import { CustomInput } from '../customInput';

type TCustomFormField = {
  name: string;
  value: string;
  onFieldUpdate: (fieldValue: string) => void;
  isMandatory?: boolean;
};

type TCustomFormInput = {
  fields: TCustomFormField[];
  buttonName: string;
  onValidateClick: () => void;
};

export const CustomForm = (input: TCustomFormInput): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <form className="border p-4 my-4">
      {!isOpen && <CustomButton onClick={() => setIsOpen(true)}>Add new item</CustomButton>}

      {isOpen && (
        <>
          {input.fields.map((field, idx) => (
            <div key={`field_${field}_${idx}`} className="form__group field">
              <input
                value={field.value}
                onChange={(e) => field.onFieldUpdate(e.target.value)}
                required={field.isMandatory ?? true}
                autoFocus={idx === 0 ? true : false}
                className="form__field"
                type="input"
                placeholder={field.name}
              />
              <label className="form__label">{field.name}</label>
            </div>
          ))}

          <div className="flex pt-5" hidden={!isOpen}>
            <CustomButton onClick={() => setIsOpen(false)}>Cancel</CustomButton>

            <CustomButton type="submit" onClick={input.onValidateClick}>
              {input.buttonName}
            </CustomButton>
          </div>
        </>
      )}
    </form>
  );
};
