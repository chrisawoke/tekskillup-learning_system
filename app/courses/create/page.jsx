"use client";

import { useForm } from "react-hook-form";
import { uuid } from "short-uuid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaDollarSign,
  FaInfoCircle,
  FaPenNib,
  FaPhotoVideo,
  FaTags,
} from "react-icons/fa";
import FormSelector from "./ui/FormSelector";
import SwitchBtn from "./ui/SwitchBtn";
import FaqInput from "./ui/FaqInput";
import DynamicAddInput from "./ui/DynamicAddInput";
import WordsInput from "./ui/WordsInput";
import { FaCircleCheck } from "react-icons/fa6";

const CreateCourse = () => {
  const [activeTab, setActiveTab] = useState("Basic");
  const [category, setCategory] = useState();
  const [level, setLevel] = useState();
  const [dripContent, setDripContent] = useState(false);
  const [createdAs, setCreatedAs] = useState();
  const [courseFaq, setCourseFaq] = useState();
  const [requirements, setRequirements] = useState();
  const [outcomes, setOutcomes] = useState();
  const [isFree, setIsFree] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [expiry, setExpiry] = useState("Lifetime");
  const [previewProvider, setPreviewProvider] = useState();
  const [metaKeywords, setMetaKeywords] = useState();

  const tabs = [
    { label: "Basic", icon: <FaPenNib /> },
    { label: "Info", icon: <FaInfoCircle /> },
    { label: "Pricing", icon: <FaDollarSign /> },
    { label: "Media", icon: <FaPhotoVideo /> },
    { label: "Seo", icon: <FaTags /> },
    { label: "Finish", icon: <FaCheckCircle /> },
  ];

  const categories = ["Responsive Design", "HTML & CSS", "Tailwind"];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const createAs = ["Active course", "Private course", "Upcoming course"];
  const expiryPeriod = ["Lifetime", "Limited Time"];
  const previewProviders = ["Youtube", "Vimeo", "HTML5"];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(
      data,
      category,
      dripContent,
      courseFaq,
      requirements,
      metaKeywords
    );
  };

  const scrollLeft = () => {
    const container = document.getElementById("tab-container");
    container.scrollTo({
      left: container.scrollLeft - 200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = document.getElementById("tab-container");
    container.scrollTo({
      left: container.scrollLeft + 200,
      behavior: "smooth",
    });
  };

  const watchedDiscountedPrice = watch("discountedPrice");
  const watchedPrice = watch("price");

  return (
    <>
      {/* Tabs to control which content of the form the user is viewing */}
      <section className="relative flex w-full items-center px-7 text-gray-500">
        <button
          onClick={scrollLeft}
          className="absolute left-2 flex h-8 w-8 items-center justify-center rounded-full border border-primary_700 bg-gray-100 transition-colors hover:bg-gray-300"
        >
          <FaArrowLeft />
        </button>
        <div
          id="tab-container"
          className="scrollbar-hide flex w-full overflow-x-auto scroll-smooth text-sm font-semibold"
        >
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`w-full py-4 px-8 flex gap-1 items-center justify-center transition-colors ${
                activeTab === tab.label
                  ? "bg-primary_700 text-white"
                  : "bg-gray-200"
              }`}
            >
              <span className="text-xs">{tab.icon}</span>

              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-2 flex h-8 w-8 rotate-180 items-center justify-center rounded-full border border-primary_700 bg-gray-100 transition-colors hover:bg-gray-300"
        >
          <FaArrowLeft />
        </button>
      </section>

      {/* Form content */}
      <section className="flex items-center justify-center py-10">
        <form
          className="form-course-create w-full max-w-[70%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {activeTab === "Basic" && (
            <section>
              <div className="form-label-input">
                <label>Course type</label>
                <input
                  placeholder="Enter course type"
                  type="text"
                  {...register("type", {
                    required: "This field must be filled",
                  })}
                />
              </div>

              <div className="form-label-input">
                <label>Course title</label>
                <input
                  placeholder="Enter course title"
                  type="text"
                  {...register("title", {
                    required: "This field must be filled",
                  })}
                />
              </div>

              <div className="form-label-input">
                <label>Short description</label>
                <textarea
                  cols="20"
                  rows="10"
                  placeholder="Provide a short description for your course"
                  {...register("shortDesc", {
                    required: "This field must be filled",
                  })}
                />
              </div>

              <div className="form-label-input">
                <label>Course Description</label>
                <textarea
                  cols="20"
                  rows="10"
                  placeholder="Provide a description for your course"
                  {...register("longDesc", {
                    required: "This field must be filled",
                  })}
                />
              </div>

              <div className="w-full gap-1">
                <label>Category</label>
                <FormSelector
                  options={categories}
                  valueSetterFunc={setCategory}
                />
              </div>

              <div className="w-full gap-1">
                <label>Level</label>
                <FormSelector options={levels} valueSetterFunc={setLevel} />
              </div>

              <div className="flex w-full flex-col gap-1">
                <label>Enable drip content</label>
                <SwitchBtn valueSetterFunc={setDripContent} />
              </div>

              <div className="w-full gap-1">
                <label>Create as</label>
                <FormSelector
                  options={createAs}
                  valueSetterFunc={setCreatedAs}
                />
              </div>
            </section>
          )}
          {activeTab === "Info" && (
            <section>
              <div className="w-full gap-1">
                <label>Course FAQ</label>
                <FaqInput valueSetterFunc={setCourseFaq} />
              </div>

              <div className="w-full gap-1">
                <label>Requirements</label>
                <DynamicAddInput
                  valueSetterFunc={setRequirements}
                  placeholder={"Provide requirements"}
                />
              </div>

              <div className="w-full gap-1">
                <label>Outcomes</label>
                <DynamicAddInput
                  valueSetterFunc={setOutcomes}
                  placeholder={"Provide outcomes"}
                />
              </div>
            </section>
          )}
          {activeTab === "Pricing" && (
            <section>
              <div className="flex w-full items-center justify-start gap-1">
                <input
                  type="checkbox"
                  {...register("free", {})}
                  onChange={(e) => {
                    setIsFree(e.target.checked);
                  }}
                />
                <label>Check if this is a free course</label>
              </div>
              {!isFree && (
                <div className="flex w-full flex-col gap-8">
                  <div className="form-label-input">
                    <label>Course price ($)</label>
                    <input
                      placeholder="Enter course price"
                      type="number"
                      {...register("price", {})}
                    />
                  </div>

                  <div className="flex items-center justify-start gap-1">
                    <input
                      type="checkbox"
                      {...register("discount", {})}
                      onChange={(e) => {
                        setHasDiscount(e.target.checked);
                      }}
                    />
                    <label>Check if this course has a discount</label>
                  </div>

                  {hasDiscount && (
                    <div className="form-label-input">
                      <label>Discounted price ($)</label>
                      <input
                        placeholder="Enter discounted price"
                        type="number"
                        {...register("discountedPrice", {})}
                      />

                      {!isNaN(watchedDiscountedPrice) && (
                        <p className="text-sm text-gray-500">
                          {`This course has `}
                          <span className="text-primary_700">
                            {(watchedDiscountedPrice * 100) / watchedPrice}%
                          </span>
                          {` discount`}
                        </p>
                      )}
                    </div>
                  )}
                  <hr />
                </div>
              )}
              <div className="w-full gap-1">
                <label>Expery period</label>
                <FormSelector
                  options={expiryPeriod}
                  valueSetterFunc={setExpiry}
                />
              </div>
              {expiry === "Limited Time" && (
                <div className="form-label-input">
                  <label>Number of months</label>
                  <input
                    placeholder="Enter course expiry"
                    type="number"
                    {...register("expiryMonths", {})}
                  />
                  <p className="text-sm text-gray-500">
                    After purchase, students can access the course until your
                    selected time.
                  </p>
                </div>
              )}
            </section>
          )}
          {activeTab === "Media" && (
            <section>
              <div className="w-full gap-1">
                <label>Course overview provider</label>
                <FormSelector
                  options={previewProviders}
                  valueSetterFunc={setPreviewProvider}
                />
              </div>

              <div className="form-label-input">
                <label>Course overview url</label>
                <input
                  placeholder="E.g: https://www.youtube.com/watch?v=LLbew85exp0"
                  type="url"
                  {...register("previewURL", {
                    required: "This field must be filled",
                  })}
                />
              </div>

              <div className="form-label-input">
                <label>Course thumbnail</label>
                <input
                  type="file"
                  className="flex flex-col text-sm text-stone-500 file:mr-5 file:rounded-md file:border-[1px] file:bg-stone-50 file:px-3 file:py-1 file:text-xs file:font-medium file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-primary_700"
                  accept="image/jpeg, image/png, image/jpg, image/webp, image/svg+xml"
                  {...register("previewThumbnail", {
                    required: "This field must be filled",
                  })}
                />
              </div>
            </section>
          )}
          {activeTab === "Seo" && (
            <section>
              <div className="form-label-input">
                <label>Meta keywords</label>
                <WordsInput valueSetterFunc={setMetaKeywords} />
              </div>

              <div className="form-label-input">
                <label>Meta description</label>
                <textarea
                  cols="20"
                  rows="10"
                  placeholder="Provide a meta description for your course"
                  {...register("metaDescription", {
                    required: "This field must be filled",
                  })}
                />
              </div>
            </section>
          )}
          {activeTab === "Finish" && (
            <section className="text-gray-500">
              <div className="flex flex-col items-center justify-center gap-2">
                <FaCircleCheck height={250} width={250} />
                <h1>Thank You!</h1>
                <h2>You are just one click away </h2>
                <button
                  className="mt-4 rounded-md bg-primary_700 px-4 py-2 text-white transition-all hover:scale-95 hover:bg-primary_700/80"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </section>
          )}
        </form>
      </section>
    </>
  );
};

export default CreateCourse;

// <form
//   onSubmit={handleSubmit(onSubmit)}
//   className="mt-5 flex flex-col items-start justify-center gap-4"
// >
//   <div className="flex gap-2">
//     <label htmlFor="courseName">Course Name</label>
//     <input
//       id="courseName"
//       type="text"
//       className="border-[1px]"
//       {...register("courseName", { required: "Course Name is required" })}
//     />
//     {errors.courseName && <span>{errors.courseName.message}</span>}
//   </div>

//   <div className="flex gap-2">
//     <label htmlFor="description">Description</label>
//     <textarea
//       id="description"
//       className="border-[1px]"
//       {...register("description", { required: "Description is required" })}
//     />
//     {errors.description && <span>{errors.description.message}</span>}
//   </div>

//   {/* Handle how we want to upload images, for the moment I just leave the name of the uploaded file */}
//   <div className="flex gap-2">
//     <label htmlFor="image">Image</label>
//     <input
//       id="image"
//       type="file"
//       accept="image/*"
//       {...register("image", { required: "Image is required" })}
//     />
//     {errors.image && <span>{errors.image.message}</span>}
//   </div>

//   <button type="submit" className="bg-slate-300 px-2 py-3">
//     Next: Content
//   </button>
// </form>
