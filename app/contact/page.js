import FormTamblet from "@/component/ui/form";

export default function ContactPage() {
    return(
        <FormTamblet title='Contact Us'>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Your Name" id="name" />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Your Email" id="email" />
            </p>
            <p>
                <label htmlFor="description">description</label>
                <textarea name="description" id="description" placeholder="Enter Your Description"></textarea>
            </p>
        </FormTamblet>
    )
}