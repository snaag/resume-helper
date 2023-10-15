import WriteListItem from "./WriteListItem.tsx";

const WriteList = () => {
    const list: ListItem[] = [{
        title: '제목',
        maxLength: 100,
        description: '제목입니다'}];

    return (
        <div>
            {
                list.map((item, i) =>
                    <WriteListItem key={i} count={i} title={item.title} maxLength={item.maxLength} description={item.description} />
                )
            }
        </div>
    );
};

export default WriteList;
