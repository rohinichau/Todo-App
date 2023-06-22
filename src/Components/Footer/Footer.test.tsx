import { render, screen } from '@testing-library/react';
import Footer from './Footer';


describe("Footer component testing", () => {
    it("has Copyright © 2023 text", () => {
        render(
            <Footer />
        );

        // Testing Copyright © 2023 text
        expect(
            screen.getByText("Copyright © 2023")
        ).toBeInTheDocument();


    });
});




