import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqInput = ({ valueSetterFunc }) => {
  const [faqs, setFaqs] = useState([]);
  const [faq, setFaq] = useState({ question: "", answer: "" });

  const handleChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const addFaq = () => {
    setFaqs([...faqs, faq]);
    valueSetterFunc([...faqs, faq]);
    setFaq({ question: "", answer: "" });
  };

  const deleteFaq = (index) => {
    const newFaqs = [...faqs];
    newFaqs.splice(index, 1);
    setFaqs(newFaqs);
    valueSetterFunc(newFaqs);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <section className="form-label-input flex w-full flex-col gap-2">
        <div className="flex w-full gap-1">
          <input
            type="text"
            name="question"
            value={faq.question}
            onChange={handleChange}
            placeholder="Question"
            className="h-full"
          />
          <button
            className="flex w-12 items-center justify-center rounded-md bg-primary_700 p-1 text-white transition-transform hover:scale-95 hover:bg-primary_700/80"
            onClick={addFaq}
          >
            <FaPlus />
          </button>
        </div>

        <textarea
          cols="20"
          rows="5"
          name="answer"
          value={faq.answer}
          onChange={handleChange}
          placeholder="Answer"
          className="pr-10"
        />
      </section>
      <div className="flex max-h-80 flex-col gap-6 overflow-y-scroll">
        {faqs.map((faq, index) => (
          <div className="flex flex-col gap-2 text-gray-500" key={index}>
            <div className="flex gap-1">
              <p className="w-full rounded-md border px-3 py-1">
                {faq.question}
              </p>
              <button
                className="flex w-8 items-center justify-center rounded-md bg-gray-500 p-1 text-white transition-transform hover:scale-95 hover:bg-gray-500/80"
                onClick={() => deleteFaq(index)}
              >
                <FaMinus />
              </button>
            </div>
            <p className="w-full rounded-md border px-3 py-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqInput;
