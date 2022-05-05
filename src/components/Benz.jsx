import benzImage from "../assets/albert.jpg";

const Benz = () => {
    return (
    <div className="mt-4">
        <div className="fs-3">
            <strong>Audi</strong>
            S.P.A. is a Italian autootive manufacturer of luxury vehicles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at mollitia aut reprehenderit laboriosam pariatur porro dicta suscipit fugiat. Tenetur unde aut distinctio veniam consequatur rerum sed vel magni magnam, accusamus placeat. Suscipit?
        </div>
        <div className="mt-4">
            <img width="60%" className="rounded" src={benzImage} alt="benz" />
        </div>
        <div>
            <span>
                Photo by {" "}
                <a href="https://unsplash.com/@albertvincentwu">
                    Roberto Nickson
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/@albertvincentwu">
                    Unsplash
                </a>
            </span>
        </div>
    </div>
    );
};

export default Benz;