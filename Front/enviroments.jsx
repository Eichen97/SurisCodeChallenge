const prod = { urlBackEnd: "https://localhost:44367/" };

const dev = { urlBackEnd: "https://localhost:44367/" };

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;