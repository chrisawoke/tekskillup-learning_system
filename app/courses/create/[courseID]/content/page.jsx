"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { uuid } from "short-uuid";
import { useParams } from "next/navigation";
import { createSections } from "@/services/supabase.service";

const CreateCourseContent = () => {
  const { courseID } = useParams();
  const { register, handleSubmit, control } = useForm();
  const {
    fields: sectionFields,
    append: sectionAppend,
    remove: sectionRemove,
  } = useFieldArray({
    control,
    name: "sections",
  });

  //The logic to determine the duration of the classes and therefore the sections is not implemented yet

  const onSubmit = (data) => {
    // Add IDs to sections and classes
    const sections = data.sections.map((section) => {
      const sectionId = uuid(); // Generate unique section ID
      const classesWithIds = section.classes.map((cls) => ({
        ...cls,
        id: uuid(),
        section_id: sectionId,
      }));

      return {
        ...section,
        id: sectionId,
        course_id: courseID,
        classes: classesWithIds,
      };
    });

    createSections(sections);
    // Log the updated data
    console.log(sections);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <h2>Create Sections and Classes</h2>
        {sectionFields.map((section, index) => (
          <div
            className="bg-slate-200 border-[1px] border-slate-800 p-4 flex flex-col gap-2"
            key={section.id}
          >
            <div className="flex gap-2 justify-center items-center">
              <input
                {...register(`sections[${index}].name`)}
                placeholder="Section Name"
              />
              <button type="button" onClick={() => sectionRemove(index)}>
                Remove Section
              </button>
            </div>

            <Controller
              control={control}
              name={`sections[${index}].classes`}
              render={({ field }) => (
                <>
                  {field.value.map((cls, clsIndex) => (
                    <div key={cls.id} className="flex gap-2">
                      <input
                        name={`sections[${index}].classes[${clsIndex}].name`}
                        placeholder="Class Name"
                        onChange={(e) => {
                          const newClasses = [...field.value];
                          newClasses[clsIndex] = {
                            ...newClasses[clsIndex],
                            name: e.target.value,
                          };
                          field.onChange(newClasses);
                        }}
                      />
                      <select
                        name={`sections[${index}].classes[${clsIndex}].type`}
                        value={cls.type}
                        onChange={(e) => {
                          const newClasses = [...field.value];
                          newClasses[clsIndex] = {
                            ...newClasses[clsIndex],
                            type: e.target.value,
                          };
                          field.onChange(newClasses);
                        }}
                      >
                        <option value="select">Please select a type</option>
                        <option value="video">Video</option>
                        <option value="text">Text</option>
                        <option value="quiz">Quiz</option>
                      </select>
                      <input
                        name={`sections[${index}].classes[${clsIndex}].content_url`}
                        placeholder="Content URL"
                        onChange={(e) => {
                          const newClasses = [...field.value];
                          newClasses[clsIndex] = {
                            ...newClasses[clsIndex],
                            content_url: e.target.value,
                          };
                          field.onChange(newClasses);
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange([...field.value, {}]);
                    }}
                  >
                    Add Class
                  </button>
                </>
              )}
            />
          </div>
        ))}
        <button type="button" onClick={() => sectionAppend({ classes: [] })}>
          Add Section
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateCourseContent;
