"use client";

import { createCourse } from "@/services/supabase.service";
import { useForm } from "react-hook-form";
import { uuid } from "short-uuid";
import { useRouter } from "next/navigation";

const CreateCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    //Right now the teacherID is hardcoded, in the future it should be the current userID
    const course = {
      id: uuid(),
      teacherID: "abc-1",
      name: data.courseName,
      description: data.description,
      image: data.image[0].name,
    };

    createCourse(course);
    router.push(`/courses/create/${course.id}/content`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 justify-center items-start mt-5"
    >
      <div className="flex gap-2">
        <label htmlFor="courseName">Course Name</label>
        <input
          id="courseName"
          type="text"
          className="border-[1px]"
          {...register("courseName", { required: "Course Name is required" })}
        />
        {errors.courseName && <span>{errors.courseName.message}</span>}
      </div>

      <div className="flex gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="border-[1px]"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      {/* Handle how we want to upload images, for the moment I just leave the name of the uploaded file */}
      <div className="flex gap-2">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          {...register("image", { required: "Image is required" })}
        />
        {errors.image && <span>{errors.image.message}</span>}
      </div>

      <button type="submit" className="bg-slate-300 py-3 px-2">
        Next: Content
      </button>
    </form>
  );
};

export default CreateCourse;
