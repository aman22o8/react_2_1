const Button = (props) => {
  //  Write your code here. this is component and we r passing the props as argument
  const { className, button_content } = props;
  return <button className={`button  ${className}`}>{button_content}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <h1 className="main_heading">Social Button</h1>
    <div className="button_container">
      <Button className="like_1" button_content="Like" />
      <Button className="comment_1" button_content="Comment" />
      <Button className="share_1" button_content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
