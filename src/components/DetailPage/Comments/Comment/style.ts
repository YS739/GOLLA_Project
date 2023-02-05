import styled from "styled-components";

export const CommentBox = styled.div`
    padding: 18px 30px 18px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid gray;
`

export const ToggleBtn = styled.div`
    cursor: pointer;
    padding: 10px;
    position: absolute;
    right: -10px;
    top: 5px;
`

export const IconBox = styled.div`
    height: 36px;
    width: 36px;
    margin-right: 10px;
`

export const CateIcon = styled.div`
    border-radius: 40px;
    background-color: ${(props) => props.color};
    color: white;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    p {
        padding-top: 2px;
        padding-left: 1px;
    }
`
export const CommentDatail = styled.div`
    width: 100%;
`

export const NameDateBox = styled.div`
    margin-bottom: 5px;
`

export const Name = styled.span`
    font-size: 15px;
    margin-right: 5px;
`

export const Date = styled.span`
    font-size: 14px;
`

export const Content = styled.span`
    font-size: 17px;
`

export const EditInput = styled.input`
    border: transparent;
    background-color: transparent;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
    padding: 5px;
    width: 90%;
    font-size: 17px;
    :focus-visible {
        outline: none;
    }
`

export const EditBtn = styled.button`
    height: 30px;
    width: 8%;
    border: transparent;
    background-color: #495057;
    color: white;
    border-radius: 10px;
    margin-left: 10px;
    font-weight: 700;
    cursor: pointer;
`