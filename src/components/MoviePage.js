import React from 'react'

function MoviePage({ selected, clickBtn }) {
    return (
        <div className="App">
            <header className="headerPage">
                <h1 style={{cursor:"pointer"}} value={'0'} onClick={clickBtn}>Movies<span>DB</span></h1>
            </header>
            <main>
                <section className="movieDataSection">
                    <div className="poster">
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/71N-JUbCrwL._AC_SY679_.jpg'} />
                    </div>
                    <div className="data">
                        <h2 className="movie-title">Space Between Us</h2>
                        <div className="movie-summary">
                            <p>The first human born on Mars travels to Earth for the first time, experiencing the wonders of the planet through fresh eyes. He embarks on an adventure with a street smart girl to discover how he came to be. </p>

                            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                        </div>
                        <ul className="movie-meta">
                            <li><strong>Rating:</strong>
                                <div className="star-rating" title="Rated 4.00 out of 5"><span style={{ width: "69%" }}><strong className="rating">4.00</strong> out of 5</span></div>
                            </li>
                            <li><strong>Length:</strong> 98 min</li>
                            <li><strong>Premiere:</strong> 22 March 2013 (USA)</li>
                            <li><strong>Category:</strong> Animation/Adventure/Comedy</li>
                        </ul>
                        <ul className="starring">
                            <li><strong>Directors:</strong> Kirk de Mico (as Kirk DeMico). Chris Sanders</li>
                            <li><strong>Writers:</strong> Chris Sanders (screenplay), Kirk De Micco (screenplay)</li>
                            <li><strong>Stars:</strong> Nicolas Cage, Ryan Reynolds, Emma Stone</li>
                        </ul>
                    </div>
                </section>
                <section className="movieDataSection">
                    <h2>Movie Trailer</h2>
                    <div className="trailer_frame">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/x73-573aWfs" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                </section>
                <section className="movieDataSection movieRelatedSec">
                    <h2>Related Movies</h2>
                    <div className="relatedMovie">
                        <img src="https://uc0a8dfc12a10103da58e029059a.previews.dropboxusercontent.com/p/thumb/AA8345wrv3ls2Dp5uuTQpdUIQg-E97DkfEtSFc0AFKilj1vq1Fb-NppZQP_FSPqBa9AaQOOPdjplmskoxVcLFafyTPCvKBhZ8---rQgqwu2KJ_x1VF9tWU-pg1UjeX4vCeiYgAZOzVgK_P1VIn-yr99YupSF2syuhVQ6Je37cfbnew60sIQWeRn4MjIvN0t87d3IDpu2IOD3OiGNljqWfCgXEpVqq7ILepuQ6LcBBq5eS4euhoXizy1fhrv6Z6ErZSxHR7WGipJ2sF2qcAyx30DD-nqAxhvawStU05pNulWi65M_pYm-SXkht-K8UfcatNixgi7Bew2YaxWkMwoQrCPXOZrCdIyKQlMV8v6xQAhy5BZo0Hp6t9ANnnm2TaYkcEQlRFRc-5-KyV1bWe4vRwkp/p.jpeg" />
                        <h3>John Wick</h3>
                    </div>
                    <div className="relatedMovie">
                        <img src="https://ucf1aac6d1816a5b6bc022ea4cc6.previews.dropboxusercontent.com/p/thumb/AA9kNx1o9HWHBMt8Mc3WRU2H-GOL_3weNiWsVo3_Rjt5a9fXfm9brB438UvWod7GNAt5wEWFrMcZf3osQnYYeHQ9ao69HacWms3HyRwPXnLSIK4rJqnb5VIVkt-VIATvxeMehfXJAWsa2kEa61xwV1fMY2M2NyCmm6QZqKARXksV31Qlq2WxBbTXbFd9Rb1uqCJE0aKEBB9ItW4RqOMKB2KSE7kQCanhUIfjzW17I8MNP1-YS1luJ0ju_1DUyOeMwlyKuWSyaHovVNeGdscZYU-DkeKVnBm9DS7yntLUgQELPXhlQp4NBRYmWVWuTrb-lI1nw6y95n_9grkV7c4EXUroUqv8TjDTX918Q2AtW_CQKjNJiGZ4F3kNzoEZOrWoupDAhf3lCfMouX6MZ_GlMb1m/p.jpeg" />
                        <h3>Spider Man Homecoming</h3>
                    </div>
                    <div className="relatedMovie">
                        <img src="https://uceda8389e48ed67d29bc2e76004.previews.dropboxusercontent.com/p/thumb/AA88bCA6scUKownmPNVuE4oi-hzveTgW7TpS2phOvfEgcLzU69T-NGATpy-JsZkBx0Hwglx_VT9tWNEWyQ9zKNuP0F3uTsxuOqwl6pY1XMNfSuMwfAfUNwW-mR_fcCz4fmTlieB0dyP8w2v-kftNcxdjh1a-bF-5ucDhrmarxrzIAiM-ESwXWI5uR8s60MU8Il8XZk8pK6iqMDhvj08iMnvpXeprpBqHIbTBPJOIVeIHUo8VUBi5BYYywKJUJGwHLZiEeH4VP6s9C5b1_096q-hVsHgk_jR-HssRl1JSLY_HY_mYnt56CTXP3-hrg35MrjsEbSbs3_62I01-NHhUSq5atokYmPkEnetQNOwbhBHiI319bbyp0dMcu7yxX6fZvHf7bBenub25UcMHZlM9PUPv/p.jpeg" />
                        <h3>Beauty and Beast</h3>
                    </div>
                    <div className="relatedMovie">
                        <img src="https://uceb5a543c27103bcc08f1012372.previews.dropboxusercontent.com/p/thumb/AA8T5nqpXIlDxKnNmU3uG4nlp-Sxpm640gNejXxSddC1aFxazvnYTKgabAYHAhKvxFH894Dk8RWTNfUzIJ4D8m4SsQQCZ2tbDEYXActxni1aKMfyfRLOxSswm5Pyl3HE_l_TK7u11iiBf66c0_zWiV4HpZUIhRRuVhsrqFnZBmoa9u9Lc6rTmSm0N7vlDhKWAgm1RUPJKYYPWGrhyfghs8pBlXaRK2BeHVisIsWhuuL1nKGTBo6tlsBf8apbpK1EiO_solMpaL9QCeBTxbfLo-K3oX09BTLXBZTxecQ2l6h5khCckay9JmphLHHS1tacIdLK5VyoomXgDeKi83fD2EISPyHhwZGU7v_2D6etxnIFnG9CKXBQ74zXwCJ8W4fOmQ0ouVMdGW7Lc58LcY_gNNPX/p.jpeg" />
                        <h3>Pirates of the Caribbean</h3>
                    </div>
                    <div className="relatedMovie">
                        <img src="https://uc827de5775ad9ce748c82fa44d7.previews.dropboxusercontent.com/p/thumb/AA-0JihvG_LkdxJwztim6qDkEUlkW2z8_nNGGbpS5LYawoc121pDEhrPA4wGhEGfW-4uclhtRSWFvGbOdUiEJSkVRaYeg56E_cpANXISzUIhTLekoUvVuiN4y1yvYNJNJNlUsKMtvu00fNH3de3ciIFxb_uB_h27ovnHAeFKxHm6GVpqkLO0DQRvnM4NafiSkDAsj5xmePsUn7wuFNcxOgYjQpx8xxNhQfm24MrBJaQj4SOr9zi8j_QktLUzzdSon3gw2YHxEJcnlUTqjdk78Ay8X0yKw3Iysn1IEaROr1yn9RGChNu-KjKcDKrA0zsWHn9tWL9a9NrXZeIVQjraf5yvNiiJ9la6wys16xs1Qi5_CR6OB8k136nWt9GpPoWnbfmBLwRaY3fWBFXjG03mTfFT/p.jpeg" />
                        <h3>Fifty Shades Darker</h3>
                    </div>
                    <div className="relatedMovie">
                        <img src="https://uccd512ed061d7e76010602453f2.previews.dropboxusercontent.com/p/thumb/AA9KQDB_Zn2zwEvJCSVp6_StMtVe6vXBKEi9pusXlhnBS8T0A0fxVAk4pEv8tdkB8xkc1F6X8tgM4JCpZl56q80XMMTxHinSk5hEO-cfQqr_Cgtpkxu5UvzDUw4z_-ntlo-BaUrf6nmq9AXMiMpIOiMwQYVW9n2nKAaPCTs8t5A2W69NwDMTSQJFjHiWQQpKPljwj55_9OPQ3DjGLea2p7TPKdG-VFvUtD3FPs8UuGPlCwPGXcKxjqIH8YpDg8zMcaavWNCOXgSpFOtuU2A7-5jhJv22PKwR91KgWZ0YCZtGMG2OkSOtbgNLlLN6o726FhsYdJ-4w5yS1Rgz_SUh6hlKwdd7u-7Ze75cjS-l940cE0VT6hEUiCEebf5LTUQqs3RZcaJ0551pf1YYd5a9bdI6/p.jpeg" />
                        <h3>Transformers</h3>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MoviePage