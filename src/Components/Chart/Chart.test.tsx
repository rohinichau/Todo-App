import { render, screen } from '@testing-library/react';
import Chart from './Chart';

describe("Chart component testing", () => {

    const task = [{
        "id": "1",
        "title": "Delectus aut autem",
        "status": "Pending",
        "subTask": [{ "id": "1", "label": "subtask 1.1", "checked": true }, { "id": "2", "label": "subtask 1.2", "checked": false }, { "id": "3", "label": "subtask 1.3", "checked": true }],
        "description": "description"
    }]

    test('Status', () => {

        render(<Chart task={task} />);
        const status = screen.getByText("Pending");
        expect(status).toBeInTheDocument();


    });

    test('Graph label', () => {
        render(<Chart task={task} />);
        const status = screen.getByText("Graphical representation of task");
        expect(status).toBeInTheDocument();


    });
});
