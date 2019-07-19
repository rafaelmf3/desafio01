import * as Yup from "yup";
import Project from "../models/Project";

class ProjectController {
  async show(req, res) {
    const projects = await Project.findAll();

    return res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      title: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const projectExists = await Project.findOne({
      where: { title: req.body.title }
    });

    if (projectExists) {
      return res.status(400).json({ error: "Project already exists." });
    }

    const { id, title } = await Project.create(req.body);

    // Project.create({
    //   id,
    //   title
    // });

    return res.json({
      id,
      title
    });
  }

  async update(req, res) {
    const { title } = req.body;
    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    await project.update(req.body);

    return res.json(project);
  }

  async delete(req, res) {
    const project = await Project.findByPk(req.params.id);

    await project.destroy();

    return res.status(204);
  }

  async newTask(req, res) {
    const { title } = req.body;

    const project = await Project.findByPk(req.params.id);
    // taskArray = project.tasks;
    // taskArray.push(title);
    // project.update(tasks: taskArray);

    return res.json(project);
  }
}

export default new ProjectController();
