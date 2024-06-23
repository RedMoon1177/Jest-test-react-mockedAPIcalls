import React, { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserList from './UserList';
import '@testing-library/jest-dom';

test('render UserList', async () => {
    // Mock the fetch function
    // Mock the fetch function
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
        })
    );

    // Render UserList Component (with the mock fetch func above)
    await act(async () => {
        render(<UserList />);
    });

    // Wait for the component to fetch data
    await waitFor(() => {
        const userList = screen.getByText(/user list/i);
        expect(userList).toBeInTheDocument();

        // const user1 = screen.getByText(/alice/i);
        // expect(user1).toBeInTheDocument();

        // const user2 = screen.getByText(/bob/i);
        // expect(user2).toBeInTheDocument();
    });
});