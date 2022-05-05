import audiImage from "../assets/roberto.jpg";

const Audi = () => {
    return (
    <div className="mt-4">
        <div className="fs-3">
            <strong>Audi</strong>
            Ag is a German autootive manufacturer of luxury vehicles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at mollitia aut reprehenderit laboriosam pariatur porro dicta suscipit fugiat. Tenetur unde aut distinctio veniam consequatur rerum sed vel magni magnam, accusamus placeat. Suscipit?
        </div>
        <div className="mt-4">
            <img width="60%" className="rounded" src={audiImage} alt="audi" />
        </div>
        <div>
            <span>
                Photo by {" "}
                <a href="https://unsplash.com/@rpnickson">
                    Roberto Nickson
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/@rpnickson">
                    Unsplash
                </a>
            </span>
        </div>
    </div>
    );
};

export default Audi;