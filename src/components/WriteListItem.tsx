import {useEffect, useState} from "react";

interface Props extends ListItem{
    count: number
}

const style = {
    width: "100%",
    padding: "20px",
    fontSize: "1.1rem",
    lineHeight: '2rem'
}

const WriteListItem = ({count, title, maxLength, description}: Props) => {
    const [memo, setMemo] = useState('');
    const [contents, setContents] = useState('');

    useEffect(() => {
        setMemo(loadMemoFromLocalStorage());
        setContents(loadContentsFromLocalStorage());
    }, []);

    const loadMemoFromLocalStorage = () => {
        return window.localStorage.getItem(`${count}_[memo]_${title}`) || '';
    }

    const loadContentsFromLocalStorage = () => {
        return window.localStorage.getItem(`${count}_[contents]_${title}`) || '';
    }

    useEffect(() => {
        window.localStorage.setItem(`${count}_[memo]_${title}`, memo);
    }, [memo]);

    useEffect(() => {
        window.localStorage.setItem(`${count}_[contents]_${title}`, contents);
    }, [contents]);


    const updateMemo = ({target: {value}}: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMemo(value);
    }

    const updateContents = ({target: {value}}: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(value);
    }

    return (
        <div>
            <h2>{count+1}. {title} ({contents.length}/{maxLength})</h2>
            <p>{description}</p>
            <h3>메모</h3>
            <textarea value={memo} onChange={updateMemo} maxLength={5000} style={style} rows={10} />
            <h3>내용</h3>
            <textarea value={contents} onChange={updateContents} maxLength={maxLength} style={style} rows={20}/>

        </div>
    );
};

export default WriteListItem;
