interface planCardInterface {
    planTitle: string,
    planDescription: string,
    planPrice: string,
    planFeatures: string[],
    notAvailableFeatures: string[]
}
export const planCardsData:planCardInterface[] = [
    {
        planTitle:'Basic',
        planDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        planPrice:'0.00',
        planFeatures:["feature1","feature2","feature3","feature4","feature5"],
        notAvailableFeatures:["feature6","feature7","feature8","feature9","feature10"]
    },
    {
        planTitle:'Standard',
        planDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        planPrice:'10.00',
        planFeatures:["feature1","feature2","feature3","feature4","feature5","feature6","feature7"],
        notAvailableFeatures:["feature8","feature9","feature10"]
    },
    {
        planTitle:'Premium',
        planDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        planPrice:'20.00',
        planFeatures:["feature1","feature2","feature3","feature4","feature5","feature6","feature7","feature8","feature9","feature10"],
        notAvailableFeatures:[]
    }
]
export default planCardInterface;