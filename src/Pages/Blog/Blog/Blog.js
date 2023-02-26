import React from "react"
import Accordion from "react-bootstrap/Accordion"

const Blog = () => {
  return (
    <div className="mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Cors ?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources.
            <br />
            <br />
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
            cross-site request forgery (CSRF)
            <br />
            <br />
            Cross-origin resource sharing (CORS) is a browser security feature
            that restricts cross-origin HTTP requests that are initiated from
            scripts running in the browser. If your REST API's resources receive
            non-simple cross-origin HTTP requests, you need to enable CORS
            support.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why using Firebase ?</Accordion.Header>
          <Accordion.Body>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the privet Route work ?</Accordion.Header>
          <Accordion.Body>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How does Node Work ?</Accordion.Header>
          <Accordion.Body>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive our blog projects. Write To KM
            Nazrul Islam
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Blog
