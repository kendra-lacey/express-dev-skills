# express-dev-skills

Your objective in part 1 is to put in a rep doing everything that you did during the [Express Routers and Controllers](https://www.notion.so/Express-Routers-and-Controllers-389712e515414871902cac694b848aff) lecture:

- Scaffold a new app named `express-dev-skills` using `e-gen-replacement` (don’t forget to run `npm i`).
- Create an array of “fake” data representing some of your awesome developer skills (or another resource of your choice). The specific properties describing a `skill` (or other) object are up to you!
- Implement **index** functionality for the `skills` resource or the resource you chose

### Hints

- Keep the data resource name short and simple - something like `skills`.
- Following best-practice routing and MVC will result in the following modules for the `skills` resource:
    - **`routes/skills.js`**
    - **`data/skill-data.js`**
    - **`views/skills`**
    - **`controllers/skills.js`**
- Use [RESTful/Resourceful Routing Conventions](https://www.notion.so/RESTful-Resourceful-Routing-Conventions-def9e2a2d1c748d1afacb965c5d8b449)

## Part 2

Your objective in part 2 is to put in a rep doing everything that you did during the [Intro to Mongoose](https://www.notion.so/Intro-to-Mongoose-8a6d1ae995b54c43a20308374f9dddfb) lecture:

- Refactor our app to use Mongoose/MongoDB. No additional functionality is added in this step.

<aside>
🚨 You will NOT see any data in your app at this time. Continue on to part 3.

</aside>

## Part 3

Your objective in part 3 is to put in a rep doing everything that you did during the [The Chart and URL/Route Parameters](https://www.notion.so/The-Chart-and-URL-Route-Parameters-a15f3970195748729be5085278754703) lecture:

- Display an **Add Skill (or resource of your choice)** link on the **index** view that, when clicked, displays a **new** view with a form to enter a new skill (or another resource of your choice)
- Allow that form to be submitted, which should create a new document in your database. After submitting this form, redirect the user to the **index** view.
    
    <aside>
    🚨 You should see data on the index view after this step!
    
    </aside>
    
- Implement **show** functionality for your resource

## Part 4

In [Express Middleware](https://www.notion.so/Express-Middleware-654f3c2a612d4b83a4cff8c6b4e53e75), you saw how to use Express middleware, such as:

- `express.urlencoded` (AKA body-parser middleware)
- `method-override`

The goal of the lab is to do put in a rep doing everything that you did during the [Express Middleware](https://www.notion.so/Express-Middleware-654f3c2a612d4b83a4cff8c6b4e53e75) lesson by adding the following functionality to the `express-dev-skills` project:

- On the **show** view, display a *Delete Skill* link that deletes the selected document from the database and redirects to the **index** view when it is clicked.

<aside>
🧠 All routes should follow those described in the [RESTful/Resourceful Routing Conventions](https://www.notion.so/RESTful-Resourceful-Routing-Conventions-def9e2a2d1c748d1afacb965c5d8b449) guide.

</aside>

### Hints

- Be sure to install, require & mount the `method-override` middleware.

# Level Up 🚀

1. On the **show** view, display an *Edit Skill* link that, when clicked, displays an **edit** view that displays a form for editing that Dev Skill.
2. When the edit Dev Skill form is submitted, the skill should be updated in the “database” and redirect the user back to the **show** view.

## Hints

- The controller action will need to get the Dev Skill being edited using the `Skill` Model and pass it to the **edit** view.
- Pre-fill `<input>` elements by using the `value` attribute and some EJS tags to write out the data properties of the skill passed in.
