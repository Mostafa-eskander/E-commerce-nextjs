import FormTamblet from "@/component/ui/form";

export default function LoginPage() {
    return(
        <FormTamblet title='LogIn'>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Your Email" id="email" />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Your Password" id="password" />
            </p>
        </FormTamblet>
    )
}