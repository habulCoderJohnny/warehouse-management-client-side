import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container bg-white text-black'>
            <div className="quesition">
                <h2>Que:1. Difference between javascript and nodejs.</h2>
                <div className="javascript">
                    <h4>javascript</h4>
                    <li>It is an open-source, cross-platform, interpreted, lightweight scripting programming language</li>
                    <li>It is a programming language. It works in any browser that has a proper browser engine.</li>
                    <li>It is generally used on the client-side server.</li>
                    <li>It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++.</li>
                </div>
                <div className="javascript">
                    <h4>Node js</h4>
                    <li>It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.</li>
                    <li>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</li>
                    <li>It is generally used on the server-side.</li>
                    <li>All node projects represent the JavaScript community.</li>
                </div>
            </div>
            <hr />
            <div className="quesition">
                <h2>Que:2.  Differences between sql and nosql databases.</h2>
                <div className="javascript">
                    <h4>SQL</h4>
                    <li>SQL databases are relational,</li>
                    <li>SQL databases use structured query language and have a predefined schema.</li>
                    <li>SQL databases are table-based</li>
                    <li>SQL databases are better for multi-row transactions</li>
                </div>
                <div className="javascript">
                    <h4>NoSQL </h4>
                    <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>NoSQL databases are non-relational.</li>
                    <li>NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>NoSQL is better for unstructured data like documents or JSON</li>
                </div>
            </div>
            <hr />
            <div className="quesition">
                <h2>Que:3. What is the purpose of jwt and how does it work</h2>

                <p>JWT on its own is nothing but an open standard for transmitting messages via HTTP.</p>
                <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server.
                    JWTs can be encrypted, but they are typically encoded and signed.
                    When it comes to API authentication and server-to-server authorization, JSON web token is particularly a useful technology.
                </p>
                <p>By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.</p>

            </div>
        </div>
    );
};

export default Blog;