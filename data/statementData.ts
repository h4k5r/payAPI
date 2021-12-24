interface StatementDataInterface {
    statementTitle: string,
    statementDescription: string
}

export const statementData: StatementDataInterface[] = [
    {
        statementTitle: 'Our Vision',
        statementDescription: 'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that give every one the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services though technology'
    },
    {
        statementTitle: 'Our Business',
        statementDescription: 'At the core of our platform is the technological infrastructure APIs that connect consumers. Our Innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers'
    },
    {
        statementTitle: 'The Culture',
        statementDescription: "We strongly believe there is always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
    },
    {
      statementTitle: 'The People',
      statementDescription:"We're all passionate about building a nore efficient and inclusive financial infrastructure together. At payAPI, We have diverse backgrounds and skills."
    }
];
export default StatementDataInterface;