import { createClient } from "@supabase/supabase-js";

//TODO:Replace with the nextjs way of importing before deploy
// export const supabase = createClient(
//   import.meta.env.VITE_SUPA_REST_URL,
//   import.meta.env.VITE_SUPA_ANON_KEY
// );

//TODO:Replace with env var call before deploy
export const supabase = createClient(
  "https://yrqdkygklurctvzomyjz.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlycWRreWdrbHVyY3R2em9teWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1OTkwNTMsImV4cCI6MjAxOTE3NTA1M30.dVDR312oVpNjmNIlGb0cDff7o3YDsZK3dFTiZQmE5ms"
);

//Adds data to a table given it's name
export const addToDB = async (tableName, dbData) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert([dbData])
    .select();

  if (error) throw error;
};

//Simply reads all the data from a table given it's name
export const readAllDB = async (tableName) => {
  const { data, error } = await supabase.from(tableName).select("*");
  if (error) {
    throw error;
  }
  return data;
};

//Deletes a row based on the value of one of its columns
export const deleteDBData = async (tableName, columnName, columnValue) => {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq(columnName, columnValue);

  if (error) {
    throw error;
  }

  console.log("Deletion successful");
};

// Returns related data from one table (fromTable) based on a specified value (fromValueName) in the "name" column.
// It selects all columns from the specified table (selectedTable) and additional data specified in selectedData,
// where the value in the "name" column matches the provided fromValueName.
// If successful, it returns the retrieved data; otherwise, it throws an error.
export const readRelatedData = async (
  fromTable,
  fromValueName,
  selectedTable,
  selectedData
) => {
  const { data, error } = await supabase
    .from(fromTable)
    .select(`*, ${selectedTable} (${selectedData})`)
    .eq("name", fromValueName);

  if (error) throw error;
  console.log(data);
  return data;
};

export const createCourse = async (courseData) => {
  addToDB("courses", {
    id: courseData.id,
    teacher_id: courseData.teacherID,
    name: courseData.name,
    description: courseData.description,
    image: courseData.image,
  });
};

export const createSections = async (sectionsArr) => {
  for (const section of sectionsArr) {
    try {
      // Extract section details without the classes property
      const { classes, ...sectionDetails } = section;

      // Add section details to the 'sections' table in the DB
      await addToDB("sections", sectionDetails);

      // If there are classes, add them to the 'classes' table in the DB
      if (classes && classes.length > 0) {
        for (const cls of classes) {
          await addToDB("classes", cls);
        }
      }
    } catch (error) {
      console.error("Error occurred while adding sections:", error);
    }
  }
};
