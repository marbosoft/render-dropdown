import ferrariImage from "../assets/viktor.jpg";

const Ferrari = () => {
    return (
    <div className="mt-4">
        <div className="fs-3">
            <strong>Audi</strong>
            S.P.A. is a Italian autootive manufacturer of luxury vehicles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at mollitia aut reprehenderit laboriosam pariatur porro dicta suscipit fugiat. Tenetur unde aut distinctio veniam consequatur rerum sed vel magni magnam, accusamus placeat. Suscipit?
        </div>
        <div className="mt-4">
            <img width="60%" className="rounded" src={ferrariImage} alt="ferrari" />
        </div>
        <div>
            <span>
                Photo by {" "}
                <a href="https://unsplash.com/@viktortheo">
                    Roberto Nickson
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/@viktortheo">
                    Unsplash
                </a>
            </span>
        </div>
    </div>
    );
};

export default Ferrari;