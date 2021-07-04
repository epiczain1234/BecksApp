import Carousel from 'react-native-snap-carousel';

export class MyCarousel extends Component {

    _renderItem = ({item, index}) => {
        return (
            <Card> 
                <View 
                style={styles.slide} >
                    <Text style={styles.title}>{ item.title }</Text>
                </View>
            </Card>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}