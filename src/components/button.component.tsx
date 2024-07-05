type ButtonParams = {
    name: string;
    option?: string;
};
export default function Button(param: ButtonParams) {
    <button className={`${param.option}`}>param.name</button>;
}
