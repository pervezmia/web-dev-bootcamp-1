  "use server"
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
  "use server";
  // const name = formData.get("title");
  // const description = formData.get("description");
  // const status = formData.get("status");
  // const priority = formData.get("priority");
  // const assignedTo = formData.get("assignedTo");
  console.log("adding a task with", formData);
  // console.log("adding a task with name", name);
  // const newTask = Object.fromEntries(formData.entries());

    // console.log('Adding a task with name:', newTask);
  const newTask = Object.fromEntries(formData.entries());
  // console.log("Adding a task with", newTask);

  const res = await postTask(newTask);

  if(res.ok){
    revalidatePath("/tasks")
  }
  return res;
  
};


export const newTaskAction = async (formData) => {

  const newTask = Object.fromEntries(formData.entries());
  console.log("Adding a task with name:", newTask);

  const res = await postTask(newTask);

  if(res.ok){
    revalidatePath("/tasks");
    redirect("/tasks");

  }
}