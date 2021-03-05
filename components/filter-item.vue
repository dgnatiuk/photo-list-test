<template>
	<div class="filter-group">
		<div class="filter-group__title">{{ group.title }}</div>
		<div class="filter-group__list">
			<div class="filter-group__item" v-for="item of group.items" :key="item.id">  
				<div class="filter-group__box">
					<img :src="item.thumbnailUrl" alt="" class="filter-group__img">
					<div class="filter-group__text">{{ item.title }}</div>
				</div>
				<img 
					class="filter-group__heart" 
					:class="{active: item.favorite}"
					:src="item.favorite ? filledHeart : unfilledHeart" 
					@click="updateFav({item, group})"
				>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			group: {
				type: Object,
				required: true
			},
		},
		data() {
			return {
				filledHeart: require('@/static/img/svg/heart_grade.svg'),
				unfilledHeart: require('@/static/img/svg/heart_mono.svg')
			}
		},
		methods: {
			updateFav(params) {
				this.$emit('updateFav', {id: params.item.id, group: params.group.groupName})
			}
		},
	}
</script>

<style lang="scss" scoped>
.filter-group{
	font-size: 12px;
	line-height: 1.3em;
	font-weight: bold;
	color: #1B204F;
	max-width: 260px;
	margin-right: 53px;

	&__title{
		margin: 0 0 8px 20px;
	}

	&__item {
		background: #F7F8F9;
		border-radius: 8px;
		padding: 4px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& + & {
			margin-top: 8px;
		}

		&:hover {
			.filter-group__heart {
				opacity: 1;
			}
		}
	}

	&__box {
		display: flex;
		align-items: center;
	}

	&__img {
		width: 32px;
		height: 32px;
		border-radius: 8px;

	}

	&__text {
		margin-left: 11px;
	}

	&__list {
		margin-bottom: 26px;
	}

	&__heart {
		opacity: 0;
		cursor: pointer;

		&.active {
			opacity: 1;
		}
	}
}
</style>