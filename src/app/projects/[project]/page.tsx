import { getProject } from "../../../../sanity/sanity-utils";

type ProjectProps = {
    params: {
        project: string;
    }
}
async function Project ( { params }: ProjectProps) {
    const slug = params.project;
    const project = await getProject(slug); 
  return (
    <div>
    <p>hello les gens</p>
    <p>{project.name}</p>
    </div>
  )
}

export default Project;