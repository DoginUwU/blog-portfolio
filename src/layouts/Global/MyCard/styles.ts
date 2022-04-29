import styled from 'styled-components';

const Container = styled.section`
    max-width: 260px;
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: 112px;
        height: 112px;
        border-radius: 16px;
    }

    p {
        font-weight: 100;
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const Contacts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 12px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        padding: 12px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.semantic.blue};

        svg {
            width: 12px;
            height: 12px;
        }

        &:hover {
            opacity: 0.9;
        }
    }
`;

export { Container, Contacts };
