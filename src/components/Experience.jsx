import '../styles/Experience.css'


export default function Experience(){
    return (
        <section className='experience'>
            <div className="experience--about">
                <h1>Experienced experts are giving advices.</h1>
                <h4>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h4>
                <button className='button--content'>Learn how we work</button>
            </div>

            <img src='images/experience.png' />

            <div className="experience--statistics">
                <div className="experience--statistics--block">
                    <h1>1M+</h1>
                    <h4>Customers visit Albino every month to get their service done.</h4>
                </div>
                <div className="experience--statistics--block">
                    <h1>92%</h1>
                    <h4>Satisfaction rate comes from our awesome customers.</h4>
                </div>
                <div className="experience--statistics--block">
                    <h1>4.9/5.0</h1>
                    <h4>Average customer ratings we have got all over internet.</h4>
                </div>
            </div>
        </section>
    )
}