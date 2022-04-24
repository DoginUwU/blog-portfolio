import Sticky from 'react-stickynode';
import styled from 'styled-components';

interface BookmarkProps {
    active?: boolean;
}

const StickyContainer = styled(Sticky)`
    .sticky {
        /* margin-top: -65px; */
    }
`;

const Container = styled.div`
    position: relative;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    .title {
        width: 100%;
        text-align: start;
    }

    p {
        font-weight: 100;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    padding: 0 10px;
`;

const Bookmark = styled.h3<BookmarkProps>`
    font-size: 1rem;
    color: ${({ theme, active }) => (active ? theme.colors.semantic.lightBlue : theme.colors.black)};
    cursor: pointer;
`;

export { Container, Content, Bookmark, StickyContainer };
