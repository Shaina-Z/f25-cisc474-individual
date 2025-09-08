```mermaid
    flowchart TD
    A(Log In) --> B(Course List)
    B<-->G(Profile Page)
    D<-->G
    E<-->G
    F<-->G
    B <-->D(Single Course View)
    D <--> E(Assignment List)
    E <--> F(Assignment Submission)