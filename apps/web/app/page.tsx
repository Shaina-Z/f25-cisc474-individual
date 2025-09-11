import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link"

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <input type="text" id="username"></input>
                <input type="text" id="password"></input>
                <nav>
                    <Link className="Log in" href="/course-view">Log In</Link>
                </nav>
                
            </main>
        </div>
    );
}
