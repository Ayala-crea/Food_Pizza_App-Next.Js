import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Email", type: "email", placeholder: "text@example.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const res = await fetch("/your/endpoint", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              if (res.ok && user) {
                return user
              }
              return null
            }
          })
    ]
});

export { handler as GET, handler as POST }

function CredentialsProvider(arg0: {
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: string;
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: { username: { label: string; type: string; placeholder: string; }; password: { label: string; type: string; }; }; authorize(credentials: any, req: any): Promise<any>;
}): import("next-auth/providers").Provider {
    throw new Error("Function not implemented.");
}
