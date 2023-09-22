import './App.css';
import Card from './components/Card'

const App = () => {

  return (
    <div className="App">
      <div>
        <h1>Tech Learning Community 💻</h1>
        <h2>Connect, Learn, Share</h2>

        <tr style={{ display: 'flex', justifyContent: 'center' }}>
          <td className="Events"></td>
          <td> <Card img="../src/assets/img/1.jpg" title="Introduction to Computer Science" description="A great course for you to start learning computer science! Sponsored by Harvard University." url="https://pll.harvard.edu/course/cs50-introduction-computer-science" /></td>
          <td> <Card img="../src/assets/img/2.jpg" title="Get Started with Python programming" description="Begin your coding path with a begineer friendly language - python!" url="https://about.gitlab.com/blog/2021/10/21/beginner-guide-python-programming/" /></td>
          <td> <Card img="../src/assets/img/3.jpg" title="Learn About Different Data Types" description="Data types you must know - Programming Fundamentals" url="https://press.rebus.community/programmingfundamentals/chapter/data-types/#:~:text=A%20data%20type%20is%20a,character%20or%20string%2C%20and%20Boolean." /></td>
        </tr>
        <tr style={{ display: 'flex', justifyContent: 'space-between' }}>
          <td className="Events"></td>
          <td> <Card img="../src/assets/img/4.jpg" title="Web Development Basics" description="Learn the fundamentals of web development with HTML, CSS, and JavaScript." url="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" /></td>
          <td> <Card img="../src/assets/img/5.jpg" title="JavaScript Basics" description="Learn the fundamentals of JavaScript programming for web development." url="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" /></td>
          <td> <Card
            img="../src/assets/img/6.jpg"
            title="SQL Database Design"
            description="Learn the principles of designing efficient and scalable SQL databases."
            url="https://support.microsoft.com/en-gb/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5"
          /></td>
        </tr>
        <tr style={{ display: 'flex', justifyContent: 'space-between' }}>
          <td className="Events"></td>
          <td>  <Card
            img="../src/assets/img/7.jpg"
            title="Responsive Web Design with Flexbox"
            description="Master the art of creating flexible and responsive web layouts using Flexbox."
            url="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          /></td>
          <td>   <Card
            img="../src/assets/img/8.jpg"
            title="Introduction to Cybersecurity"
            description="Get started in the field of cybersecurity and learn about online security threats."
            url="https://www.youtube.com/watch?v=z5nc9MDbvkw"
          /></td>
          <td> <Card
            img="../src/assets/img/9.jpg"
            title="Introduction to Machine Learning"
            description="Dive into the world of machine learning and its applications."
            url="https://www.geeksforgeeks.org/introduction-machine-learning/"
          /></td>
        </tr>
        <tr style={{ display: 'flex', justifyContent: 'space-between' }}>
          <td className="Events"></td>
          <td>   <Card
            img="../src/assets/img/10.jpg"
            title="Building RESTful APIs with Node.js"
            description="Create RESTful APIs using Node.js and Express for web and mobile apps."
            url="https://www.toptal.com/nodejs/secure-rest-api-in-nodejs"
          /></td>
          <td>   <Card
            img="../src/assets/img/11.jpg"
            title="Introduction to Cloud Computing"
            description="Learn about cloud services and their role in modern computing."
            url="https://aws.amazon.com/what-is-cloud-computing/"
          /></td>
          <td>  <Card
            img="../src/assets/img/12.jpg"
            title="Introduction to Linux"
            description="Get started with the Linux operating system and command-line basics."
            url="https://www.linux.com/what-is-linux/"
          /></td>
        </tr>


      </div>


    </div>
  )
}

export default App