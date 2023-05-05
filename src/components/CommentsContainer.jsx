import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="pl-5 border border-l-black ml-5">
      <Comment data={comment} key={index} />

      <div>
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Rudransh Bhardwaj",
      text: "This is a comment",
      replies: [
        {
          name: "Rudransh Bhardwaj",
          text: "This is a comment",
          replies: [
            {
              name: "Rudransh Bhardwaj",
              text: "This is a comment",
              replies: [
                {
                  name: "Rudransh Bhardwaj",
                  text: "This is a comment",
                  replies: [
                    {
                      name: "Rudransh Bhardwaj",
                      text: "This is a comment",
                      replies: [
                        {
                          name: "Rudransh Bhardwaj",
                          text: "This is a comment",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "Rudransh Bhardwaj", text: "This is a comment", replies: [] },
    { name: "Rudransh Bhardwaj", text: "This is a comment", replies: [] },
    { name: "Rudransh Bhardwaj", text: "This is a comment", replies: [] },
    { name: "Rudransh Bhardwaj", text: "This is a comment", replies: [] },
    { name: "Rudransh Bhardwaj", text: "This is a comment", replies: [] },
    { name: "Rudransh Bhardwaj", text: "This is a comment", replies: [] },
  ];
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold ">Comment</h1>
      {/* {commentsData.map((comment) => {
        return <Comment data={comment} />;
      })} */}
      <CommentList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
