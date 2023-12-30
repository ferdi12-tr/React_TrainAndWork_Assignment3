import React, { Component } from 'react'

export default class Header extends Component {


    render() {

        return (
            <header id="tg-header" className="tg-header tg-headervtwo tg-haslayout">
                <div className="tg-topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="tg-userlogin">
                                    <figure><a href=""><img src="./assets/images/users/img-01.jpg" alt="" /></a></figure>
                                    <span>Hi, Melonie</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-middlecontainer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <strong className="tg-logo"><a href=""><img src="./assets/images/logo.png" alt="company name here" /></a></strong>
                                <div className="tg-searchbox">
                                    <form className="tg-formtheme tg-formsearch">
                                        <fieldset>
                                            <input type="text" name="search" className="typeahead form-control" placeholder="Search by title, author, keyword, ISBN..." />
                                            <button type="submit" className="tg-btn">Search</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-navigationarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="tg-navigationholder">
                                    <nav id="tg-nav" className="tg-nav">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar" />
                                                <span className="icon-bar" />
                                                <span className="icon-bar" />
                                            </button>
                                        </div>
                                        <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                            <ul>
                                                <li className="menu-item-has-children menu-item-has-mega-menu">
                                                    <a href="">All Categories</a>
                                                    <div className="mega-menu">
                                                        <ul className="tg-themetabnav" role="tablist">
                                                            <li role="presentation" className="active">
                                                                <a href="#artandphotography" aria-controls="artandphotography" role="tab" data-toggle="tab">Art &amp; Photography</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#biography" aria-controls="biography" role="tab" data-toggle="tab">Biography</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#childrensbook" aria-controls="childrensbook" role="tab" data-toggle="tab">Children’s Book</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#craftandhobbies" aria-controls="craftandhobbies" role="tab" data-toggle="tab">Craft &amp; Hobbies</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#crimethriller" aria-controls="crimethriller" role="tab" data-toggle="tab">Crime &amp; Thriller</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#fantasyhorror" aria-controls="fantasyhorror" role="tab" data-toggle="tab">Fantasy &amp; Horror</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#fiction" aria-controls="fiction" role="tab" data-toggle="tab">Fiction</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#fooddrink" aria-controls="fooddrink" role="tab" data-toggle="tab">Food &amp; Drink</a>
                                                            </li><li role="presentation">
                                                                <a href="#graphicanimemanga" aria-controls="graphicanimemanga" role="tab" data-toggle="tab">Graphic, Anime &amp; Manga</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#sciencefiction" aria-controls="sciencefiction" role="tab" data-toggle="tab">Science Fiction</a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content tg-themetabcontent">
                                                            <div role="tabpanel" className="tab-pane active" id="artandphotography">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="./assets/images/img-01.png" alt="" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="biography">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="./assets/images/img-01.png" alt="" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="childrensbook">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="craftandhobbies">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="crimethriller">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="fantasyhorror">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="fiction">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="fooddrink">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="graphicanimemanga">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div role="tabpanel" className="tab-pane" id="sciencefiction">
                                                                <ul>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>History</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Veniam quis nostrud</a></li>
                                                                            <li><a href="">Exercitation</a></li>
                                                                            <li><a href="">Laboris nisi ut aliuip</a></li>
                                                                            <li><a href="">Commodo conseat</a></li>
                                                                            <li><a href="">Duis aute irure</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Architecture</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Tough As Nails</a></li>
                                                                            <li><a href="">Pro Grease Monkey</a></li>
                                                                            <li><a href="">Building Memories</a></li>
                                                                            <li><a href="">Bulldozer Boyz</a></li>
                                                                            <li><a href="">Build Or Leave On Us</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="tg-linkstitle">
                                                                            <h2>Art Forms</h2>
                                                                        </div>
                                                                        <ul>
                                                                            <li><a href="">Consectetur adipisicing</a></li>
                                                                            <li><a href="">Aelit sed do eiusmod</a></li>
                                                                            <li><a href="">Tempor incididunt labore</a></li>
                                                                            <li><a href="">Dolore magna aliqua</a></li>
                                                                            <li><a href="">Ut enim ad minim</a></li>
                                                                        </ul>
                                                                        <a className="tg-btnviewall" href="">View All</a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                                        <div className="tg-textbox">
                                                                            <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                            <div className="tg-description">
                                                                                <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                            </div>
                                                                            <a className="tg-btn" href="">view all</a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="current-menu-item">
                                                    <a href="">Home</a>
                                                </li>
                                                <li>
                                                    <a href="">Best Selling</a>
                                                </li>
                                                <li>
                                                    <a href="">Weekly Sale</a>
                                                </li>
                                                <li className="">
                                                    <a href="">Latest News</a>
                                                </li>
                                                <li><a href="">Contact</a></li>
                                                <li><a href="">About Us</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <div className="tg-wishlistandcart">
                                        <div className="dropdown tg-themedropdown tg-wishlistdropdown">
                                            <a href="" id="tg-wishlisst" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="tg-themebadge">3</span>
                                                <i className="icon-heart" />
                                            </a>
                                            <div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
                                                <div className="tg-description"><p>No products were added to the wishlist!</p></div>
                                            </div>
                                        </div>
                                        <div className="dropdown tg-themedropdown tg-minicartdropdown">
                                            <a href="" id="tg-minicart" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="tg-themebadge">3</span>
                                                <i className="icon-cart" />
                                            </a>
                                            <div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-minicart">
                                                <div className="tg-minicartbody">
                                                    <div className="tg-minicarproduct">
                                                        <figure>
                                                            <img src="./assets/images/products/img-01.jpg" alt="" />
                                                        </figure>
                                                        <div className="tg-minicarproductdata">
                                                            <h5><a href="">Our State Fair Is A Great Function</a></h5>
                                                            <h6><a href="">$ 12.15</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="tg-minicarproduct">
                                                        <figure>
                                                            <img src="./assets/images/products/img-02.jpg" alt="" />
                                                        </figure>
                                                        <div className="tg-minicarproductdata">
                                                            <h5><a href="">Bring Me To Light</a></h5>
                                                            <h6><a href="">$ 12.15</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="tg-minicarproduct">
                                                        <figure>
                                                            <img src="./assets/images/products/img-03.jpg" alt="" />
                                                        </figure>
                                                        <div className="tg-minicarproductdata">
                                                            <h5><a href="">Have Faith In Your Soul</a></h5>
                                                            <h6><a href="">$ 12.15</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tg-minicartfoot">
                                                    <a className="tg-btnemptycart" href="">
                                                        <i className="fa fa-trash-o" />
                                                        <span>Clear Your Cart</span>
                                                    </a>
                                                    <span className="tg-subtotal">Subtotal: <strong>35.78</strong></span>
                                                    <div className="tg-btns">
                                                        <a className="tg-btn tg-active" href="">View Cart</a>
                                                        <a className="tg-btn" href="">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown tg-themedropdown tg-currencydropdown">
                                            <a href="" id="tg-currenty" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>USD</span>
                                            </a>
                                            <ul className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-currenty">
                                                <li>
                                                    <a href="">
                                                        <i>£</i>
                                                        <span>British Pound</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i>$</i>
                                                        <span>Us Dollar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i>€</i>
                                                        <span>Euro</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}
