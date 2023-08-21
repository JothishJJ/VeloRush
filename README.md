# VeloRush

A programming blog for solving your problems, for every skill level.

## 🚀 Project Structure

Folders to look for

```
├── public/
├── src/
│   ├── components/shared
│   ├── content/blog
│   └── pages/
└──
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

You can find the global components in the `src/components/shared` folder and other components structchered with names of files.

The `content/blog` folder containes all the `.mdx` and `.md` files for the blogs.

Any static assets, like images, can be placed in the `public/` directory.

## 👷‍♂️ Contributing

First fork this project then,

```shell
git clone <your-repo>
```

Install all the dependencies

```shell
npm install
```

Testing

```shell
npm run dev
```

You should see your development server in `localhost:3000`
