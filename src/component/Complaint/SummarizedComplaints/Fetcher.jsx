import useFetch from "./useFetch";
import { CompaintTag } from "./tailwind/ComplaintTag";

let tags = {
  grade_issue: "grade issue",
  harassment_teacher: "harasment by a teacher",
  harassment_student: "harasment by a student",
  bullied: "bullied",
  lounge: "lounge",
  other: "other",
};

export const Fetcher = () => {
  const { isLoading, data } = useFetch("complaint/all-complaints/", true);

  if (isLoading) {
    return <h2>is loading..</h2>;
  }

  return (
    <>
      {data?.data.map((val) => (
        <CompaintTag key={val.id} tag={tags[val.tag]} body={val.body} />
      ))}
    </>
  );
};
