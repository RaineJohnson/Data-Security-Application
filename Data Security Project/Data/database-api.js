import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

let student_data = {};
let teacher_data = {};

try {
    // Read the data from JSON files
    student_data = JSON.parse(fs.readFileSync("data/students.json", "UTF-8"));
    teacher_data = JSON.parse(fs.readFileSync("data/teachers.json", "UTF-8"));
} catch (error) {
    console.error("API error: cannot read data.", error);
}

// Returns student or teacher data using the API key(s)
export const getData = (type, API_KEY) => {
    if (type === "student" && API_KEY === process.env.POSTGRES_API_KEY){
        return student_data;
    } else if (type === "teacher" && API_KEY === process.env.DISTRICT_API_KEY) {
        return teacher_data;
    } else {
        console.log("The provided API key is not valid for the type requested. Please double check your API key.");
        return 0;
    }
}
