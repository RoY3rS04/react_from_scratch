import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { PuppyForm } from "./components/PuppyForm";
import { puppies } from "./data/puppies";

export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </PageWrapper>
    )
}

function Main() {
    return (
        <main>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search />
                <Shortlist />
            </div>
            <PuppiesList puppies={puppies} />
            <PuppyForm />
        </main>
    )
}