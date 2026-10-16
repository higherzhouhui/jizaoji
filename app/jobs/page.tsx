import { redirect } from "next/navigation";

// Jobs page no longer relevant for individual freelancer - redirect to about page
export default function JobsPage() {
  redirect("/about");
}
