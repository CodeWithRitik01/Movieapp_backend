const corsOptions ={
    origin: [
        "http://localhost:3000",
        process.env.CLIENT_URL
    ].filter(Boolean),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

export { corsOptions };