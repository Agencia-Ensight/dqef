import styled from "styled-components";


export const Wrapper = styled.div`
    width: 388px;
    min-width: 388px;
    background: white;
    box-shadow: 0px 0px 20px rgba(198, 198, 198, 0.25);
    border-radius: 15px;
    padding: 50px 40px 10px 40px;


`

export const Course = styled.h2`
    font-size: 1.8rem;
    font-family: 'Knewave', sans-serif;
    color: #42A4EF;
    margin-top: 1rem;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const Price = styled.h3`
    background: #42A4EF;
    border-radius: 5px;
    padding: 8px 7px 8px 17px;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    margin-left: -1rem;
    z-index: 1;


`

export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 3px solid #42A4EF;
    z-index: 2;

`

export const ProfileName = styled.h1`
    font-size: 2.3rem;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

export const RatingContainer = styled.div`
    display: flex;
    margin-top: 0.6rem;

`

export const InfoContainer = styled.div`
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
`


export const InfoTitle = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: #4E4E4E;
`

export const Line = styled.hr`
    width: 100%;
	border: 1px solid #D1D1D1; 
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-y: scroll;
    margin-top: 1rem;
    gap: 20px;


    ::-webkit-scrollbar {
        display: none;
    }
`