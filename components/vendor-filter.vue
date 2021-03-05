<template>
	<div class="vendor-filter">
		<div class="vendor-filter__header">
			<div class="vendor-filter__title">
				Фильтр:
				<span class="vendor-filter__name" @click="LettersGroup">По алфавиту</span>
				<span class="vendor-filter__name" @click="AlbumGroup">По альбомам</span>
				<span class="vendor-filter__name" @click="FavoriteGroup">Избранное</span>
			</div>
		</div>
		<div class="vendor-filter__scroll-wrap">
			<div class="vendor-filter__scroll">
				<div class="vendor-filter__list" v-if="activeGroup">
					<filter-item 
						v-for="group of activeGroup"
						:key="group.title"
						:group="group"
						@updateFav="updateFav($event)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FilterItem from "@/components/filter-item";

export default {
	components: { FilterItem },
	props: {},

	data() {
		return {
			photos: null,
			activeGroup: null,
			favorite: null
		};
	},

	computed: {},

	created() {},

	methods: {
		LettersGroup() {
			const sortedArray = [...this.photos].sort((a, b) =>	a.title.localeCompare(b.title));

			const groupObj = sortedArray.reduce((acc, item) => {
				let title = item.title[0].toUpperCase();

				if(!acc[title]) {
					acc[title] = { title, groupName: 'LettersGroup', items: [item] };
				} else {
					acc[title].items.push(item);
				}
				return acc;
			}, {});
				this.activeGroup =  Object.values(groupObj);
		},

		AlbumGroup(){
			const groupObj = this.photos.reduce((acc, item) => {
				let title = item.albumId;

				if(!acc[title]) {
					acc[title] = { title, groupName: 'AlbumGroup', items: [item] };
				} else {
					acc[title].items.push(item);
				}
				return acc;
			}, {});

			this.activeGroup =  Object.values(groupObj);
		},

		FavoriteGroup(){
			const items = [...this.photos].filter(item => item.favorite);

			this.activeGroup = [{items, groupName: 'FavoriteGroup'}];
		},

		updateFav(params){
			this.photos.forEach(item => {
				if (item.id === params.id) item.favorite = !item.favorite;
			});

			if (params.group) this[params.group]();
		}
	},
	watch: {
		activeGroup() {
			localStorage.setItem('activeGroup', JSON.stringify(this.activeGroup));
			localStorage.setItem('photos', JSON.stringify(this.photos));
		}
	},

	mounted() {
		if(localStorage.getItem('activeGroup') && localStorage.getItem('photos')){
			this.activeGroup = JSON.parse(localStorage.getItem('activeGroup'));
			this.photos = JSON.parse(localStorage.getItem('photos'));
		} else {
			fetch("https://jsonplaceholder.typicode.com/photos")
				.then(response => response.json())
				.then(json => {
					this.photos = json.filter(item => item.albumId <= 32 && item.id - 50 * (item.albumId - 1) <= 5);  // 32 albums with 5 photos each

					this.photos.forEach(item => item.favorite = false);
					this.LettersGroup();
			}); 
		}
		
	},
};
</script>

<style lang="scss">
.vendor-filter {
	font-weight: 700;
	font-family: Open Sans, Roboto, sans-serif;
	width: 1300px;
	height: 600px;
	margin: auto;
	padding: 3.6rem 4.8rem 6rem;
	font-size: 1.2rem;
	background: #ffffff;
	border-radius: 1.2rem;
	box-sizing: border-box;

	&__header {
		margin: 0 0 1.5rem;
	}

	&__title {
		font-weight: bold;
		font-size: 1.4rem;
		line-height: 1.9rem;
	}

	&__name {
		margin: 0 0.5rem;
		text-decoration: underline;
		cursor: pointer;
	}

	&__scroll-wrap {
		overflow: hidden;
		height: 100%;
	}

	&__scroll {
		width: 100%;
		height: 100%;
		max-height: 66rem;
		overflow-y: auto;

		&::-webkit-scrollbar {
  			width: 0;
		}
	}

	&__list {
		position: relative;
		display: flex;
    	flex-direction: column;
    	flex-wrap: wrap;
    	max-height: 2400px;

		
	}
}
</style>
