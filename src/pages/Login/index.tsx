import { LockClosedIcon } from "@heroicons/react/24/outline";

export const Login = (): JSX.Element => {
  return (
    <div className="grid h-screen place-items-center">
      <form className="w-full space-y-6" action="#">
        <div>
          <LockClosedIcon
            className="w-20 h-20 p-2 rounded-full ring-2 ring-secondary-300 text-secondary-300"
            alt="Bordered avatar"
          />
        </div>

        <div className="text-2xl text-gray-900 font-semibold">
          <h2 className="text-secondary-300">Sign in</h2>
        </div>

        <div className="place-items-left">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Email"
            required={true}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5"
            required={true}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center">
          Sign In
        </button>
        <div>
          <a href="#" className="text-sm font-medium text-gray">
            Made with ❤️ at Strasbourg.
          </a>
        </div>
      </form>
    </div>
  );

  /*return (
    <Container component="main" maxWidth="xs">
      <Container
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Container component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Container>
      </Container>
      <Link className="no-underline" color="inherit" href="https://github.com/adrienweidemann/">
        Made with ❤️ at Strasbourg.
      </Link>
    </Container>
  );*/
};
